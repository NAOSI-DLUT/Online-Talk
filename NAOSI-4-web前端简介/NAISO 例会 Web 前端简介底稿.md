# NAISO 例会 Web 前端简介底稿

本文将简述 Web 前端的定位、原理、和一部分开发工具，面向对象为对软件开发基本为零基础的读者。

在讨论 Web 前端开发之前，我们首先需要讨论什么是 Web 、什么是前端。

直觉而言，Web 就是浏览器中的一个网页，用户与这个网页进行交互，可以实现例如浏览新闻资讯、预约图书馆座位、游玩网页游戏等功能。

以预约图书馆座位为例，我们首先用自己的玉兰卡账号登陆系统，在系统上预约座位，然后就可以刷卡进入图书馆了。在这个过程中，我们注意到存在两个实体的参与：一是使用浏览器访问系统的我们，二是“知悉”了我们将要进入的图书馆。以此为例我们就划分出了 Web 应用的两个对象：【我们】是 client（客户端），而【图书馆】是 server（服务端）。今天的 Web 应用大多遵循这种二元划分。

形式地说，大部分 [Web](https://en.wikipedia.org/wiki/World_Wide_Web) 应用通常是一个 [client-server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) 结构的分布式应用，其中 server 是服务的提供方、client 则是服务的使用方。一个 server 可以为多个 client 提供服务。

让我们进一步深入图书馆预约系统的技术细节。首先，图书馆在自己的电脑上部署了管理预约信息的软件，这个软件主要有以下两个功能：

1. 维护所有学生的信息、预约状态、当前图书馆内的座位状态。通常使用 [database](https://en.wikipedia.org/wiki/Database)（数据库）实现这个功能。
2. 提供一个 [interface](https://en.wikipedia.org/wiki/API)（接口），该软件的使用者可以通过这个接口输入一条新的信息（例如“池子预约了 996 号座位”），而软件则根据这条信息更新上述的数据库。

现在，假设我是图书馆管理员，我正在使用这台电脑操作上述软件。当池子同学来向我预约图书馆 996 号座位时，我只要通过上述的 interface 输入这条信息就可以了。

接下来，图书馆的电脑上又部署了第二个软件。这个软件的功能主要有：

1. 提供一个可以交互的网页，身在远处的池子同学可以通过 Internet 访问这个网页。
2. 池子同学在网页上输入“我要预约 996 号座位”后，将该信息通过 interface 输入到第一个软件中。

有了以上两个软件，图书馆就实现了一套完整的在线座位预约系统。这个例子总体上概括了现代常见的 Web 应用架构，其中第一个软件称为后端，第二个软件称为 Web server， web server 提供的网页称为前端。请注意这两个软件与 client-server 架构的关系：后端和 Web server 都运行在 server 服务器上，而只有网页前端交给了 client。

当我们用浏览器打开 [http://seat.lib.dlut.edu.cn/yanxiujian/client/index.php#](http://seat.lib.dlut.edu.cn/yanxiujian/client/index.php#) 这个链接时，发生了什么呢？

首先，我们眼前的这个页面是一个 HTML 文件。HTML 是一种超文本标记语言。超文本指的是，与单纯的文本（例如我们在记事本里写的那些）相比，它可以进一步标记文本的标题、段落、字体等信息，还可以加上图片、排版、甚至是互动功能。其中用于排版的部分称为 CSS，用于实现交互功能的部分称为 JavaScript。这是运行在 client 的部分，也就是网页前端本身，通过浏览器可以向用户展现出丰富的内容。

上述的这个链接被称为 [URL](https://en.wikipedia.org/wiki/URL)。我们可以看到这个链接的后缀是 php，意味着这个链接指向了图书馆服务器中的一个 [PHP](https://www.php.net/) 软件。该软件中的 Web server 部分知悉了“池子同学点击了链接”这件事，生成了这个 HTML 页面，并发送到池子的浏览器上，浏览器将这个 HTML 页面显示在我们眼前。这是运行在 server 的部分，通过 URL 进行访问，访问后可获得一个网页，也就是 web server。

在这个例子中，作为 web server 的是 PHP 软件的一部分。此外更常见的 web server 还有 [Apache](https://www.apache.org/) 和 [Nginx](https://www.nginx.com/)。

而网页本身的开发工作，通常是前端工程师的职责。我们接下来的话题就将聚焦于此，包括 HTML、CSS、JavaScript 的基本知识，以及相关工具的介绍。

©️ 本作品采用[知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)
进行许可。

![Untitled](Untitled.png)
