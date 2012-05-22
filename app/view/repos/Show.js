Ext.define("gh.view.repos.Show", {
    extend:"Ext.Container",
    alias:"widget.reposhow",
    requires:[
        'gh.view.repos.Trees',
        'gh.view.repos.Commits',
        'gh.view.repos.Forks'
    ],
    config:{
        layout:'fit',
        id:'repo-show',
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                id:'repoShowTitle',
                items:[
                    {
                        xtype:'button',
                        ui:'back',
                        text:'Back',
                        id: 'repo-back'
                    }
                ]
            },
            {
                xtype:'tabpanel',
                tabBarPosition:'bottom',
                id:'repoShowTabs',
                items:[
                    {
                        xtype:'treeslist',
                        iconCls:'octicon-button code',
                        title:'Code'
                    },
                    {
                        xtype:'commitslist',
                        iconCls:'octicon-button commit',
                        title:'Commits'
                    },
                    {
                        xtype:'forkslist',
                        iconCls:'octicon-button forks',
                        title:'Forks'
                    }
                ]
            }
        ]
    }
});