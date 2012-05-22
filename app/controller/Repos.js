Ext.define('gh.controller.Repos', {
    extend:'Ext.app.Controller',
    requires:[
        'gh.view.repos.List',
        'gh.view.repos.Show'
    ],

    config:{
        refs:{
            search:'#search',
            repoList:'#repoList',
            commitsList:'#commitList',
            forksList:'#forksList',
            treesList:'#treesList',
            showTitle:'#repoShowTitle',
            showTabs:'#repoShowTabs',
            backButton:'#repo-back'
        },
        control:{
            search:{
                change:function (searchField, newValue, oldValue, eOpts) {
                    Ext.getStore('Repos').changeReposUrl(newValue);
                }
            },
            repoList:{
                itemtap:'loadRepo'
            },
            forksList:{
                itemtap:'loadRepo'
            },
            treesList:{
                itemtap:'loadTree'
            },
            backButton:{
                tap:function () {
                    if (this.getShowTabs().getActiveItem() == this.getTreesList()) {
                        if (CURRENT_SHA == SHA_TREE[CURRENT_SHA]) {
                            var repoList = Ext.Viewport.getComponent('repo-list');
                            Ext.Viewport.animateActiveItem(repoList, {type:'slide', direction:'right'});
                        } else {
                            CURRENT_SHA = SHA_TREE[CURRENT_SHA];
                            Ext.getStore('Trees').changeTreesUrl(CURRENT_USER, CURRENT_REPO, CURRENT_SHA);
                        }
                    } else {
                        var repoList = Ext.Viewport.getComponent('repo-list');
                        Ext.Viewport.animateActiveItem(repoList, {type:'slide', direction:'right'});
                    }
                }
            }
        }
    },
    loadRepo:function (list, index, target, record, e, eOpts) {
        CURRENT_REPO = record.get('name');
        CURRENT_USER = record.get('ownerLogin');
        var repo = CURRENT_REPO;
        var user = CURRENT_USER;
        Ext.getStore('Commits').changeCommitUrl(user, repo);
        Ext.getStore('Forks').changeForksUrl(user, repo);
        Ext.getStore('Trees').setData([]);
        Ext.getStore('Commits').load(function () {
            var sha = Ext.getStore('Commits').first().get('treeSha');
            SHA_TREE[sha] = sha;
            CURRENT_SHA = sha;
            Ext.getStore('Trees').changeTreesUrl(user, CURRENT_REPO, sha);
        });

        // Set repo title
        var maxLength = window.screen.width - 100;
        maxLength = maxLength / 14;
        if (repo.length > maxLength) {
            repo = repo.substring(0, maxLength) + '...'
        }
        // Add owner
        maxLength = window.screen.width - 100;
        maxLength = maxLength / 10;
        if (user.length > maxLength) {
            user = user.substring(0, maxLength) + '...';
        }
        var title = '<div class="title">' + repo + '</div><div class="title-secondary">' + user + '</div>';

        var repoShow = Ext.Viewport.getComponent('repo-show');
        this.getShowTitle().setTitle(title);
        this.getShowTabs().setActiveItem(0);
        Ext.Viewport.animateActiveItem(repoShow, {type:'slide', direction:'left'});
    },
    loadTree:function (list, index, target, record, e, eOpts) {
        if (record.get('type') == 'tree') {
            var previous_sha = CURRENT_SHA;
            CURRENT_SHA = record.get('sha');
            SHA_TREE[CURRENT_SHA] = previous_sha;
            Ext.getStore('Trees').changeTreesUrl(CURRENT_USER, CURRENT_REPO, CURRENT_SHA);
        }
    }
});