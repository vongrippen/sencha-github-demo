Ext.define("gh.view.repos.Trees", {
    extend:"Ext.dataview.List",
    alias:"widget.treeslist",
    config:{
        id:'treesList',
        scrollable:'vertical',
        loadingText:'Loading Code',
        emptyText:'<div class="empty-list">No code found.</div>',
        itemTpl:'<table>' +
            '<tr>' +
            '<td><span class="octicon {[values.type == \"tree\" ? "directory" : "file"]}"></span></td>' +
            '<td>{path}</td>' +
            '</tr>' +
            '</table>',
        store:'Trees'
    }
});