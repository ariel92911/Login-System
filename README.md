# Login System
簡單的登入功能頁面 ( 需配合系統現有的 user list )


## Installing
1. 打開終端機，按照步驟 2~5 在終端機輸入指令 ( 指令不含 $ 符號 )


2. 下載 Rubbish-Generator 資料夾 ( 下載位置會依你打開終端機的位置而定 )

```
$ git clone https://github.com/ariel92911/Login-System.git
```

3. 進入 Login-System 資料夾
```
$ cd Login-System
```

4. 安裝npm套件
```
$ npm install
```

5. 執行專案
```
$ npm run dev
```

6. 在瀏覽器輸入以下網址以使用 Login-System
```
http://localhost:3000
```

## How to use
1. 輸入email & password，這是系統現有的 user list：
```
const users = [{
 {
   firstName: 'Tony',
   email: 'tony@stark.com',
   password: 'iamironman'
 },
 {
   firstName: 'Steve',
   email: 'captain@hotmail.com',
   password: 'icandothisallday'
 },
 {
   firstName: 'Peter',
   email: 'peter@parker.com',
   password: 'enajyram'
 },
 {
   firstName: 'Natasha',
   email: 'natasha@gamil.com',
   password: '*parol#@$!'
 },
 {
   firstName: 'Nick',
   email: 'nick@shield.com',
   password: 'password'
 }
]
```
2. 如果找不到 username，或是 password 錯誤，介面會顯示錯誤提示

3. 如果 username + password 組合正確，使用者就能成功登入，並導向自己的 welcome page

