Ext.Loader.setPath({
    'Ext':'lib/src'
});
Ext.application({
    name:"gh",

    models:["Repo", "Commit", "Tree"],
    stores:["Repos", "Commits", "Forks", "Trees"],
    controllers:["Repos"],
    views:['repos.List', 'repos.Show'],
    //profiles: ['Phone', 'Tablet'],
    launch:function () {
        SHA_TREE = {};
        var reposList = {
            xtype:"reposlist"
        };
        var repoShow = {
            xtype:"reposhow"
        };

        Ext.Viewport.add([reposList, repoShow]);

    }
});