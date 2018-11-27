//=========================================================================

test('GET /tasks/', () => {
    expect(getTasks_test(req,res,next)).toBe(200);
});
​
test('POST /tasks/', () => {
    expect(query_test(req,res,next)).toBe(200);
});
​
test('GET /tasks/:id' () => {
    expect(getTasks_id_test(req,res,next)).toBe(200);
});

test('POST /tasks/:id' () => {
    expect(query_id_test(req,res,next)).toBe(200);
});

//=========================================================================

async function getTasks_test(req, res, next) {
	try {
		var t = await getTasks();
		res.write(t);
    	res.end('</body></html>');
    	return 200;
	} catch(e) {
		return 404;
	}
}

async function query_test(req, res, next) {
	try {
		await query('INSERT INTO "task" (name, description, answer) VALUES (\''+req.body.name+'\', \''+req.body.desc+'\', \''+req.body.risp+'\')');
    	res.redirect('/tasks/')
		return 200;
	} catch(e) {
		return 404;
	}
}

async function getTasks_id_test(req, res, next) {
	try {
		var t = await getTask(req.params.id);
    	res.write(t);
    	res.end('</body></html>');
		return 200;
	} catch(e) {
		return 404;
	}
}

async function query_id_test(req, res, next) {
	try {
		//var voto = calcolaVoto(req.params.id, req.body.ans);
    	var voto = 10;
    	await query('INSERT INTO "taskAw" (iduser, idtask, answer, mark) VALUES (\''+logId+'\', \''+req.params.id+'\', \''+req.body.ans+'\', \''+voto+'\')');
    	res.redirect('/tasks/')
		return 200;
	} catch(e) {
		return 404;
	}
}

