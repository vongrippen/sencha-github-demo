Ext.define("gh.view.repos.Commits", {
    extend:"Ext.dataview.List",
    alias:"widget.commitslist",
    config:{
        id:'commitsList',
        scrollable:'vertical',
        loadingText:'Loading Commits',
        emptyText:'<div class="empty-list">No commits found.</div>',
        itemTpl:'<div class="commit-message">{message}</div>' +
            '<div class="commit-author">{committerName} <tpl if="author"><span class="commit-login">({author})</span></tpl></div>' +
            '<div class="commit-sha">{sha}</div>',
        store:'Commits'
    }
});