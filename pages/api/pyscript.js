// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const body = JSON.parse(req.body);

  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  <title>PyScript Hello World</title>
  <link rel="stylesheet" href="https://pyscript.net/alpha/pyscript.css" />
  <script defer src="https://pyscript.net/alpha/pyscript.js"></script>
</head>
<body>
<py-script>
${body.code}
</py-script>
</body>
</html>
`);
};
