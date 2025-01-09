const md5 = require("md5");

app.post("/login", async (req, res) => {
  const data = req.body

  // aku cuma punya 4 kolom, id, name, username dan password
  // password jangan dtampilin
  const findUser = await knex('users').select(
    "id",
    "name",
    "username",
  ).where({
    username: data.username,
    password: md5(data.password),
  }).first();

  if (findUser) { // ini pengecekan, artinya ketemu ga si user yang diminta sama frontend
    // kalo ketemu lakuin kode yang ada dibawah ini
    res.json({
      dataUser: findUser
    })
  } else { // ini kalo ga ketemu
    res.json({
      message: "Username atau Password salah"
    })
  }
});