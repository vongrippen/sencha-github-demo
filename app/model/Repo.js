Ext.define('gh.model.Repo', {

    extend:'Ext.data.Model',

    config:{
        fields:[
            { name:'id', type:'int'},
            { name:'html_url', type:'string'},
            { name:'url', type:'string'},
            { name:'name', type:'string'},
            { name:'description', type:'string'},
            { name:'homepage', type:'string'},
            { name:'fork', type:'boolean'},
            { name:'forks', type:'int'},
            { name:'ownerLogin', mapping:'owner.login', type:'string'}
        ],
        proxy:{
            type:'jsonp',
            url:'null',
            reader:{
                type:'json',
                rootProperty:'data'
            },
            listeners:{
                exception:function (proxy, response, operation, eOpts) {
                    var reposStore = Ext.getStore("Repos");
                    reposStore.setData([]);
                    return false;
                }
            }
        }
    }
});