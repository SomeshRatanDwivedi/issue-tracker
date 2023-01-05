


function showAllIssue() {                      //to show all issues
    if (typeof (project) == 'string') {

        project = JSON.parse(project);
    }
    for (let issue of project.issues) {

        let data = ` <li>
        <div class="header">
            <h5>Title:</h5>
            <span>${issue.title}</span>
        </div>
        <div class="header">
            <h5>Author:</h5>
            <span>${issue.author}</span>
        </div>
        <div class="header">
            <h5>Description:</h5>
            <span> ${issue.description}</span>
        </div>
        <div class="header">
            <h5>label:</h5>
            <span class="label-parent"></span>
       </div>
    </li>`
        let list = document.getElementById('list-parent');
        list.innerHTML += data;

    }
    addLabels(project.issues)  

}


function addLabels(issues) {                                              // to add lebels in all the corresponding issue
    let span = document.getElementsByClassName("label-parent");
    for (let i = 0; i < span.length; i++) {
        issues[i].label.forEach((label) => {
            let data = `<span class="label">${label},</span>`;
            span[i].innerHTML += data;
        })
    }

}

function filterIssue() {                                                          // to filter the issue on the basis of label and author name
    let isBugChecked = document.getElementById('gridCheck1').checked;
    let isUiImprovementChecked = document.getElementById('gridCheck2').checked;
    let isDocumentationChecked = document.getElementById('gridCheck3').checked;
    let isEnhancementChecked = document.getElementById('gridCheck4').checked;
    let isDuplicateChecked = document.getElementById('gridCheck5').checked;
    let authorName = document.getElementById('filter-by-author').value;
    if (typeof (project) == 'string') {
        project = JSON.parse(project);
    }
    let issues = project.issues

    let filteredData = [];
    if (authorName) {
        filteredData = filterOnAuthor(authorName, issues)
        document.getElementById('filter-by-author').value=''
    }
    if (!authorName) {
        filteredData = issues;
    }
    if (isUiImprovementChecked) {
        filteredData = filterOnLabel('uiImprovement', filteredData);
        document.getElementById('gridCheck2').checked=false;

    }
    if (isDocumentationChecked) {
        filteredData = filterOnLabel('documentation', filteredData);
        document.getElementById('gridCheck3')=false

    }
    if (isEnhancementChecked) {
        filteredData = filterOnLabel('enhancement', filteredData);
        document.getElementById('gridCheck4')=false;

    }
    if (isDuplicateChecked) {
        filteredData = filterOnLabel('duplicate', filteredData);
        document.getElementById('gridCheck5')=false

    }
    if (isBugChecked) {
        filteredData = filterOnLabel('bug', filteredData);
        document.getElementById('gridCheck1').checked=false;

    }
    showFilteredIssue(filteredData);

}


function filterOnAuthor(author, issues) {                      // to filter the issue on the basis of author name
    return issues.filter((issue) => {
        return issue.author.toLowerCase() == author.toLowerCase();
    })
}

function filterOnLabel(label, issues) {                           // to filter the issue on the basis of label
    let filteredIssue = [];
    issues.forEach((ele) => {
        if (ele.label && ele.label.length > 0) {

            ele.label.forEach((data) => {
                if (data == label) {
                    filteredIssue.push(ele);
                }
            })
        }

    })
    return filteredIssue;
}


function showFilteredIssue(filteredData) {                       // to  show the filtered ans searched issue
    let list = document.getElementById('list-parent');
    list.innerHTML = '';
    for (let issue of filteredData) {
        const data = ` <li>
         <div class="header">
             <h5>Title:</h5>
             <span>${issue.title}</span>
         </div>
         <div class="header">
             <h5>Author:</h5>
             <span>${issue.author}</span>
         </div>
         <div class="header">
             <h5>Description:</h5>
             <span> ${issue.description}</span>
         </div>
         <div class="header">
         <h5>label:</h5>
         <span class="label-parent"></span>
    </div>
     </li>`


        list.innerHTML += data;

    }
    addLabels(filteredData)

}




function searchIssue(){                                                               // to search the issue on the basis of title and description
    const title=document.getElementById("search-by-title").value;
    const description=document.getElementById("search-by-description").value;
    if (typeof (project) == 'string') {

        project = JSON.parse(project);
    }
    let searchedIssue=project.issues.filter((ele)=>{
        return (title?ele.title.toLowerCase()==title.toLowerCase():true &&
                description?ele.description.toLowerCase().includes(description.toLowerCase()):true
            );
    })
    document.getElementById("search-by-description").value='';
    document.getElementById("search-by-title").value='';
    showFilteredIssue(searchedIssue);


}