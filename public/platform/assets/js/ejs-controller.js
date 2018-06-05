let loadedControls ={};
let isDefined = function(v) {
    return (typeof v !== 'undefined')
}
// Read a page's GET URL variables and return them as an associative array.
let queryString = function (key)
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars[key];
}

/* Renders all regions in a document that are inside <script template-engine='ejs'>
 * Has the advantage of only parsing the relevant parts of the DOM, 
 * and rendering them in parallel! */
let renderDefaultEjsTemplate =  function(bindingData) {

    //Render all EJS template regions in parallel. 
    $("script[template-engine='ejs']").each(function(templateRegion) {
        let markup = $(this).html();
        let rendered = ejs.render(markup, bindingData)
        $(this).replaceWith(rendered);    
    })
}

/* Treats the whole page as an ejs template and renders any tags */
let renderPage = function(bindingData) {
    let markup = $(body).html();
    $(body).replaceWith(ejs.render(markup, bindingData))
}
//Treats the entire control as an ejs template
let renderControl= function(markup, bindingData) {
    return ejs.render(markup, bindingData);
}

//Dynamically load a control, specifying DOM location for insertion, control URL, the
//ID to assign the new control in the hierarchy, and the data to bind to.
let injectControl = function(path, controlId, bindingData, isRealTime) {
    $.get(path, (contentHtml) => {
        let renderedControl = "", scopedData = bindingData, ctrlid= controlId;

        renderedHtml = renderControl(contentHtml, bindingData)

        //Run any script packaged with the control
        let initScript = $("script[role='control-script']").html();
        $("script[role='control-script']").attr("role", "control-init"); //So that we don't have multiple scripts in the query above. This is hacky as shit.
        
        
        //If the control includes code to run on load, run it now.
        if (typeof initScript !== "undefined" && initScript.length > 0) {
            try {
                eval("loadedControls[ctrlid] = "+initScript);
                loadedControls[ctrlid].initControl(scopedData);
                //Each control's data gets bundled with it, in case it is required later.
                loadedControls[ctrlid].data_source=scopedData;

            } catch (x) {
                console.log(JSON.stringify(x));
            }
        } else {
            //We still bundle the data if there's no init script
            loadedControls[ctrlid] = {data_source: scopedData}
        }
        
        //Bundle the control's template, so we can rerender without going to the server
        loadedControls[ctrlid].template = contentHtml;
        loadedControls[ctrlid].mostRecentData = JSON.stringify(scopedData);

        //Being a clever bastard, I attach a reference to the DOM of the rendered control.
        //Now we can rerender without needing a container element or ugly unnecessary markup
        loadedControls[ctrlid].renderedDomChunk = $("#"+ctrlid);
        if (isRealTime) {
            setInterval(() => {refreshControl(ctrlid)}, 0)
        }

        //Load children on a delay, so that the output can be rendered first
        setTimeout(() => {loadControls(scopedData, controlId)}, 5);

        //Return the HTML of the rendered control.
        //Usage: <div><%=injectControl('nav_social.html', 'social_subnav', menuData.subnavs[0])%></div>
        //Or: $("#subnav").html(injectControl('nav_social.html', 'social_subnav', menudata.subnavs[0])%></div>
        return "<div id='"+ctrlid+"'>"+renderedHtml+"</div>";
    });
}

//Reloads a control, binding to it's own data_source
let refreshControl = function(controlId) {
    let newData = loadedControls[controlId].data_source;
    if (JSON.stringify(newData) != loadedControls[controlId].mostRecentData) {
        console.log("Data changed: "+controlId+" - refreshing UI");
        loadedControls[controlId].mostRecentData = JSON.stringify(newData);
        let current = loadedControls[controlId].renderedDomChunk;
        let template = loadedControls[controlId].template
        let renderedControl = renderControl(template, data);
        current.html(renderedControl)
        loadedControls[controlId].renderedDomChunk = current;
    }
}
let loadControls = function(bindingData, parentId) {
    $(isDefined(parentId) ? ("#"+parentId+" ctrl") : "ctrl").each(function() {
      //Async load the control from the server
      $.get($(this).attr("src"), (contentHtml) => {
        let ctrlid = $(this).attr("id") //NOTE: $(this) refers to the control template currently being processed
        let renderedControl = "";
        let scopedData = null;
        let isRealTime = isDefined($(this).attr("realtime")) && $(this).attr("realtime").toLowerCase() == "true";
        //If data source is specified, bind to that variable IN THE PARENT CONTROL'S SCOPE
        if (typeof $(this).attr("data-source") !== 'undefined') {
            scopedData = loadedControls[parentId][$(this).attr("data-source")];
        //If we have the parent id but no binding data passed in, use the default
        //which is whatever is currently bound to the parent
        } else {
            if (typeof bindingData === 'undefined' || bindingData == null) {
                scopedData = loadedControls[parentId].data_source;
            }
            //Use the binding data passed in, optionally scoped to a subset
            else {
                if (typeof $(this).attr("bind-to") === 'undefined') 
                    scopedData = bindingData
                else 
                    scopedData = eval("bindingData."+$(this).attr("bind-to"))
            }
        } 

        renderedControl = renderControl(contentHtml, scopedData);
        if ($(this).attr('doNotWrap') && $(this).attr("doNotWrap") == "true")
            $(this).replaceWith(renderedControl);
        else
            $(this).replaceWith("<span id='"+ctrlid+"'>"+renderedControl+"</span>");

        let initScript = $("script[role='control-script']").html();
        $("script[role='control-script']").attr("role", "control-init"); //So that we don't have multiple scripts in the query above. This is hacky as shit.

        
        //If the control includes code to run on load, run it now.
        if (typeof initScript !== "undefined" && initScript.length > 0) {
            try {
                eval("loadedControls[ctrlid] = "+initScript);
                loadedControls[ctrlid].initControl(scopedData);
                //Each control's data gets bundled with it, in case it is required later.
                loadedControls[ctrlid].data_source=scopedData;

            } catch (x) {
                console.log(JSON.stringify(x));
            }
        } else {
            //We still bundle the data if there's no init script
            loadedControls[ctrlid] = {data_source: scopedData}
        }
        
        //Bundle the control's template, so we can rerender without going to the server
        loadedControls[ctrlid].template = contentHtml;
        loadedControls[ctrlid].mostRecentData = JSON.stringify(scopedData);

        //Being a clever bastard, I attach a reference to the DOM of the rendered control.
        //Now we can rerender without needing a container element or ugly unnecessary markup
        loadedControls[ctrlid].renderedDomChunk = $("#"+ctrlid);
        if (isRealTime) {
            setInterval(() => {refreshControl(ctrlid)}, 0)
        }
        //Recursively call loadControls with the scoped data... this will load any child controls of the control just loaded
        loadControls(scopedData, ctrlid);
    })
  })
}