Ext.define('gh.model.Tree', {

    extend:'Ext.data.Model',

    config:{
        fields:[
            {name:'type', type:'string'},
            {name:'sha', type:'string'},
            {name:'url', type:'string'},
            {name:'size', type:'int'},
            {name:'path', type:'string'},
            {name:'mode', type:'string'}
        ],
        proxy:{
            type:'jsonp',
            url:'null',
            reader:{
                type:'json',
                rootProperty:'data.tree'
            },
            listeners:{
                exception:function (proxy, response, operation, eOpts) {
                    var reposStore = Ext.getStore("Trees");
                    reposStore.setData([]);
                    return false;
                }
            }
        }
    }
});