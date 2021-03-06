var app = angular.module('mainApp', []);

app.controller('MainController', function($scope) {
    $scope.owner = {
        name: "Sebastian Qu",
        experience: "10 years+",
        github: "hashmaparraylist",
        birthday: "1981/11/11",
        location: "Shanghai, China",
        bio: "Hello, world!",
        contact: {
            mail: "sebastianqu@gmail.com",
            blog: "http://blog.coding4life.org"
        },
        sns: {
            github: "https://github.com/hashmaparraylist",
            twitter: "https://twitter.com/hashmap2k",
            weibo: "https://weibo.cn/hashmaparraylist"
        }
    };

});

/*
$(document).ready(function() {
    async.waterfall([function(callback) {
        // get onwer info
        $.getJSON('assets/data.json', function(data) {
            callback(null, data);
        });
    }, function(me, callback) {
        $('#name').text(me.name);
        $('#experince').text(me.experience);
        $('#location').text(me.location);
        $('#bio').text(me.bio);

        var htmlString = '';
        if (me.contact.mail != null || 0 != me.contact.mail) {
            htmlString += '<a href="mailto:' + me.contact.mail + '" target="_blank">';
            htmlString += '<p class="fa fa-envelope-o fa-2x"></p>';
            htmlString += '</a>&nbsp;';
        }

        if (me.contact.blog != null || 0 != me.contact.blog) {
            htmlString += '<a href="' + me.contact.blog + '" target="_blank">';
            htmlString += '<p class="fa fa-rss-square fa-2x"></p>';
            htmlString += '</a>&nbsp;';
        }

        for (key in me.sns) {
            htmlString += '<a href="' + me.sns[key] + '" target="_blank">';
            htmlString += '<p class="fa fa-' + key +' fa-2x"></p>';
            htmlString += '</a>&nbsp;';
        }

        $('.contact').html(htmlString);
        callback(null, me);
    }, function(me, callback) {
        var url = 'https://api.github.com/users/' + me.github;
        $.getJSON(url, function(data) {
        }).done(function(data) {
            callback(null, data);
        }).fail(function(error) {
            callback(error);
        });
    }, function(gitinfo, callback) {

    }], function(error) {
    });
});
*/
