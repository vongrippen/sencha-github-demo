Ext.define("gh.store.Commits", {
    extend:"Ext.data.Store",
    config:{
        model:"gh.model.Commit",
        sorters:[
            { property:'committerDate', direction:'DESC'}
        ],
        autoLoad:true,
        filters:[
            {
                filterFn:function (record) {
                    if (record.get('sha')) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]
    },
    urlTpl:'https://api.github.com/repos/:user/:repo/commits',
    changeCommitUrl:function (user, repo) {
        var url = 'none';
        if (user) {
            url = this.urlTpl;
            url = url.replace(':user', user);
            url = url.replace(':repo', repo);
        }
        var proxy = this.getProxy();
        proxy.setUrl(url);
        this.load();
    }
});