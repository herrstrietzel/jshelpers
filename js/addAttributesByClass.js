/**
* add element attributes by classnames
* initializing classname "apply-atts"
* attributes are mapped by adding classnames with a prefix "att-"
* e.g "att-accept-image/jpeg" =>  accept="image/jpeg"  or 
* "att-data-maxFileSize-3" =>  data-maxFileSize="3"
*/
function addAttributesByClass(){
    let attEls = document.querySelectorAll('.apply-atts');
    attEls.forEach(el=>{
        let classes = [...el.classList]
        let elAtts = classes.filter( name=>{ return name.startsWith('att')   } )
        let newAtts = {}
    
        elAtts.forEach(att=>{
            let atts = att.split('att-')[1].split('-')
            let attName = atts[0].includes('data') ? atts[0]+'-'+atts[1] : atts[0];
            let attValue = atts[atts.length-1]
            if(!newAtts[attName]){
                newAtts[attName] = []
            }
            newAtts[attName].push(attValue);

            // single boolean attribute like multiple or checked
            if(attName === newAtts[attName][0]){
                el[attName] = true
            }else{
                el.setAttribute(attName, newAtts[attName])
            }
        })
    })
}
