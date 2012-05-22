Ext.define("gh.view.repos.List", {
    extend:"Ext.Container",
    alias:"widget.reposlist",
    config:{
        layout:'fit',
        id:'repo-list',
        items:[
            {
                xtype:'list',
                id:'repoList',
                scrollable:'vertical',
                loadingText:'Loading Repositories',
                emptyText:'<div class="empty-list">No repositories found.</div>',
                itemTpl:'<table>' +
                    '<tr>' +
                    '<td><span class="octicon {[values.fork ? "fork" : "repo"]}"></span></td>' +
                    '<td><div class="repoName">{name}</div><div class="repoDescription">{description}</div></td>' +
                    '</tr>' +
                    '</table>',
                store:'Repos',
                grouped:true
            },
            {
                xtype:'toolbar',
                docked:'top',
                items:[
                    {
                        xtype:'searchfield',
                        id:'search',
                        placeHolder:'GitHub User',
                        centered: 'true'
                    }
                ]
            }
        ]
    }
});