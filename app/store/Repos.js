Ext.define("gh.store.Repos", {
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
    urlTpl:'https://api.github.com/users/:user/repos',
    changeReposUrl:function (user) {
        var url = 'none';
        if (user) {
            url = this.urlTpl;
            url = url.replace(':user', user);
        }
        var proxy = this.getProxy();
        proxy.setUrl(url);
        this.load();
    }
});