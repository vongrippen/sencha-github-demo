Ext.define("gh.store.Forks", {
    extend:"Ext.data.Store",
    config:{
        model:"gh.model.Repo",
        sorters:[
            { property:'name', direction:'DESC'}
        ],
        grouper:{
            groupFn:function (record) {
                return record.get('name').substr(0, 1);
            },
            sortProperty:'name'
        }
    },
    urlTpl:'https://api.github.com/repos/:user/:repo/forks',
    changeForksUrl:function (user, repo) {
        var url = 'none';
        if (user && repo) {
            url = this.urlTpl;
            url = url.replace(':user', user);
            url = url.replace(':repo', repo)
        }
        var proxy = this.getProxy();
        proxy.setUrl(url);
        this.load();
    }
});