export default (html, state) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>

<head>
    <meta charset="utf-8">
    <title>Redux</title>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/app.css">
</head>

<body>
    <div id="app">${html}</div>
</body>
<script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
</script>
<script src="/assets/bundle.js"></script>

</html>
`
