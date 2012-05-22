Ext.define("gh.view.repos.Forks", {
    extend:"Ext.dataview.List",
    alias:"widget.forkslist",
    config:{
        layout:'fit',
        id:'forksList',
        scrollable:'vertical',
        loadingText:'Loading Repositories',
        emptyText:'<div class="empty-list">No forks found.</div>',
        itemTpl:'<table>' +
            '<tr>' +
            '<td><span class="octicon fork"></span></td>' +
            '<td><div class="repoName">{ownerLogin}</div><div class="repoDescription">{name}</div></td>' +
            '</tr>' +
            '</table>',
        store:'Forks',
        grouped:true
    }
});