# Talk 4

[NAISO 例会 Web 前端简介底稿](NAISO 例会 Web 前端简介底稿.md)

如何运行范例？首先安装 Python, 然后在命令行中运行：

```bash
cd backend
python install -r requirements.txt
python main.py
```

以启动后端。打开第二个终端运行：

```bash
cd frontend
python -m http.server
```

以启动 Web Server

后端默认为 `127.0.0.1:5000`，前端默认为 `127.0.0.1:8000`。