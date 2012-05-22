Ext.define("gh.store.Trees", {
    extend:"Ext.data.Store",
    config:{
        model:"gh.model.Tree",
        sorters:[
            { property:'path', direction:'ASC'}
        ]
    },
    urlTpl:'https://api.github.com/repos/:user/:repo/git/trees/:sha',
    changeTreesUrl:function (user, repo, sha) {
        var url = 'none';
        if (user && repo && sha) {
            url = this.urlTpl;
            url = url.replace(':user', user);
            url = url.replace(':repo', repo);
            url = url.replace(':sha', sha);
        }
        var proxy = this.getProxy();
        proxy.setUrl(url);
        this.load();
    }
});