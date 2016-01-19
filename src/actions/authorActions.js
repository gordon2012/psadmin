'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');

var AuthorActions =
{
	createAuthor: function(author)
	{
		var newAuthor = AuthorApi.saveAuthor(author);

		Dispatcher.dispatcher
		({
			actionType: actionType.CREATE_AUTHOR,
			author: newAuthor
		});
	}
};

module.exports = AuthorActions;
