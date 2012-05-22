Ext.define('gh.model.Commit', {

    extend:'Ext.data.Model',
    config:{
        fields:[
            { name:'sha', type:'string' },
            { name:'message', mapping:'commit.message', type:'string' },
            { name:'url', type:'string' },
            { name:'author', mapping:'author.login', type:'string' },
            { name:'committerName', mapping:'commit.author.name', type:'string' },
            { name:'committerEmail', mapping:'commit.author.email', type:'string' },
            { name:'committerDate', mapping:'commit.author.date', type:'date' },
            { name:'treeUrl', mapping:'commit.tree.url', type:'string' },
            { name:'treeSha', mapping:'commit.tree.sha', type:'string' }
        ],
        validations: [
            {type:'presence', field:'sha'}
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
                    var commitsStore = Ext.getStore("Commits");
                    commitsStore.setData([]);
                    return false;
                }
            }
        }
    }
});