import Image from "next/image";
import './about.css'
export default function Home() {
  return (
      <div className="kangyong bg-white" id="kangyong">
        <h1>个人简历</h1>
        <div className="profile">
          <h2>个人资料</h2>
          <div className="profile-item">
            <div className="key-value">
              <p className="profile-item-key">姓名：</p>
              <p className="profile-item-value">康勇</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">性别：</p>
              <p className="profile-item-value">男</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">籍贯：</p>
              <p className="profile-item-value">安徽亳州</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">电话：</p>
              <p className="profile-item-value">18106212269</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">工作年限：</p>
              <p className="profile-item-value">五年</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">专业：</p>
              <p className="profile-item-value">计算机科学与技术</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">邮箱：</p>
              <p className="profile-item-value">luxiaoren05@gmail.com</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">个人网站：</p>
              <p className="profile-item-value">https://luxiaoren.top</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">个人小程序：</p>
              <p className="profile-item-value">太阳相册</p>
            </div>
          </div>
        </div>
        <div className="profile">
          <h2>教育经历</h2>
          <div className="profile-item">
            <div className="key-value">
              <p className="profile-item-key">学校：</p>
              <p className="profile-item-value">皖西学院（全日制本科）</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">专业：</p>
              <p className="profile-item-value">计算机科学与技术</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">时间：</p>
              <p className="profile-item-value">2014-2018</p>
            </div>
            <div className="key-value">
              <p className="profile-item-key">荣誉：</p>
              <p className="profile-item-value">CET4, 安徽省大学生蓝桥杯C/C++ B组省赛一等奖，国赛三等奖</p>
            </div>

          </div>
        </div>
        <div className="profile">
          <h2>求职意向</h2>
          <div className="profile-item">
            <div className="key-value">

              <p className="profile-item-key">期望职位：</p>
              <p className="profile-item-value">web前端工程师</p>
            </div>
            <div className="key-value">

              <p className="profile-item-key">期望薪资：</p>
              <p className="profile-item-value">面议</p>
            </div>
            <div className="key-value">

              <p className="profile-item-key">工作性质：</p>
              <p className="profile-item-value">全职</p>
            </div>
            <div className="key-value">

              <p className="profile-item-key">工作状态：</p>
              <p className="profile-item-value">已离职，可立即上岗</p>
            </div>
          </div>
        </div>
        <div className="prog-skill">
          <h2>专业技能</h2>
          <div className="prog-skill-item">
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>
                传统web开发，包括后台系统，官网，pc端网站</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                h5开发，包括app内嵌h5, 公众号h5</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                小程序开发，包括使用uniapp,Taro,原生方式开发小程序</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                node开发, 使用nestjs + typorm + redis + mysql 进行后端开发</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                了解服务器基本知识，了解服务器部署</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>
                熟悉Html5/css3/javascript，熟悉W3C标准，了解常用的算法与数据结构。</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟练使用elementui/antd/antdMobile进行便捷开发；</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                对表现与数据分离、Web语义化、Web MVC等有较为深刻的理解；</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟悉JavaScript/Ajax/DOM等前端技术，掌握面向对象编程技能、对JS框架应用有一定的经验</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟悉HTTP协议，对前后端合作模式有深入了解。</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟悉jsonp,CORS等跨域解决方式。</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟悉移动端开发标准，能够进行移动端开发页面适配以及兼容性适配</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟练使用vue，react框架进行单页面应用的开发。熟悉vue, react的基本知识。</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟悉微信小程序开发。</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟悉微信公众号开发。</p>
            <p className="prog-skill-item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>

                熟悉企微应用开发。</p>
          </div>
        </div>
        <div className="work-expricene">
          <h2>工作经历</h2>
          <div className="work-expricene-item">
            <div className="work-com">
              <p>2020/11 – 至今</p>
              <p>欣和食品有限公司</p>
            </div>
            <div className="work-position">
              <p>职位：</p>
              <p>高级web前端工程师（TOC 前端组长）</p>
            </div>
            <div className="work-duty">
              <p>职责：</p>
              <div className="work-duty-content">
                <p>1.负责欣和ToC端产品前端工作，包括：（欣和会员中心小程序，欣和食与家小程序）</p>
                <p>2.负责项目迭代初期技术方案编写，评审，任务分配</p>
                <p>3.负责迭代过程中疑难杂症解决，代码review,保证迭代进度正常</p>
                <p>4.负责迭代结束时线上支持工作</p>
              </div>
            </div>
            <div className="work-com">
              <p>2020/5– 2020/11</p>
              <p>Storehub</p>
            </div>
            <div className="work-position">
              <p>职位：</p>
              <p>web前端工程师</p>
            </div>
            <div className="work-duty">
              <p>职责：</p>
              <div className="work-duty-content">
                <p>1.beep项目的开发与优化。</p>
                <p>2.backoffice项目 F&B 部分的开发与维护。</p>
                <p>3.beep项目UT的编写与测试</p>
                <p>4.beep项目StyleGuide的编写与维护。</p>
              </div>
            </div>
            <div className="work-com">
              <p>2018/9– 2020/5</p>
              <p>上海水象网络科技</p>
            </div>
            <div className="work-position">
              <p>职位：</p>
              <p>web前端工程师</p>
            </div>
            <div className="work-duty">
              <p>职责：</p>
              <div className="work-duty-content">
                <p>1.负责web端及h5的代码架构及实现。</p>
                <p>2.处理前端框架与第三方工具配合问题。</p>
                <p>3.对项目进行整合打包、bug的修复。</p>
                <p>4.项目的定期维护和版本的更新。</p>
                <p>5.参与新技术研讨与分享。</p>
              </div>
            </div>

            <div className="work-expricene-item">
              <div className="work-com">
                <p>2017/7 – 2018/9</p>
                <p>上海世纪畅链</p>
              </div>
              <div className="work-position">
                <p>职位：</p>
                <p>web前端工程师</p>
              </div>
              <div className="work-duty">
                <p>职责：</p>
                <div className="work-duty-content">
                  <p>1.参与出行事业部机票与酒店相关项目的需求分析。</p>
                  <p>2.参与机票项目toB端及toC（小程序）端项目开发。</p>
                  <p>3.对项目进行整合打包、bug的修复</p>
                  <p>4.项目的定期维护和版本的更新。</p>
                  <p>5.参与新技术研讨与分享。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <h2>项目经验</h2>
          <div className="project-item">
            <div className="project-name">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>
                <p>项目一:</p><p>欣和C端产品</p>
            </div>
            <div className="project-time">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>
                <p>项目周期:</p><p>无</p>
            </div>
            <div className="project-time">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                   alt=""/>
                <p>项目描述:</p><p>欣和会员中心小程序，欣和食与家小程序</p>
            </div>
            <div className="project-duty">
              <p>项目职责:</p>
              <div className="project-duty-content">
                <p>1.负责欣和C端产品开发及维护工作</p>
                <p>2.负责项目搭建及小程序融合工作</p>
                <p>3.负责小程序及后台系统搭建及初始化</p>
                <p>4.负责项目日常迭代开发，技术方案编写，评审，任务分配等工作</p>
                <p>5.负责线上问题及时响应</p>
              </div>
            </div>
            <div className="project-key">
              <p>技术要点:</p>
              <div className="project-key-content">
                <p>1.使用Taro + 原生融合方式进行开发</p>
                <p>2.使用nestjs 作为服务端</p>
                <p>3.解决了高并发下重复下单及超单问题</p>
                <p>4.使用node层作为接口转发及权限处理</p>
              </div>
            </div>
          </div>
          <div className="project-name">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目二:</p><p>beep（beepit.com）	</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目周期:</p><p>无</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目描述:</p><p> beep (在线点单配送)</p>
          </div>
          <div className="project-duty">
            <p>项目职责:</p>
            <div className="project-duty-content">
              <p>1.beep项目中F&B项目组的功能开发与维护</p>
              <p>2.项目UT的编写与测试</p>
              <p>3.项目StyleGuide的开发与维护。</p>
              <p>4.bug处理及线上优化。</p>
            </div>
          </div>
          <div className="project-key">
            <p>技术要点:</p>
            <div className="project-key-content">
              <p>1.使用react + redux + node + fetch 技术栈 进行应用开发。</p>
              <p>2.针对移动端和pc端进行适配。</p>
              <p>3.将业务逻辑抽离至redux中，利于UT的编写及页面组件的开发。</p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-name">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目三:</p><p>backoffice</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目周期:</p><p>无</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目描述:</p><p>为beep商家提供的toB端系统</p>
          </div>
          <div className="project-duty">
            <p>项目职责:</p>
            <div className="project-duty-content">
              <p>1.beep项目中F&B项目组的功能开发与维护</p>
              <p>2.项目的部署与上线</p>
            </div>
          </div>
          <div className="project-key">
            <p>技术要点:</p>
            <div className="project-key-content">
              <p>1.使用express + hbs + Jquery + bootstrap 技术栈 进行应用开发。</p>
              <p>2.针对移动端和pc端进行适配。</p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-name">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目四:</p><p>水象贷款项目（H5 + pc）	</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目周期:</p><p>3个月</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目描述:</p><p> 水象贷款项目（h5）及其官网项目（pc + h5）</p>
          </div>
          <div className="project-duty">
            <p>项目职责:</p>
            <div className="project-duty-content">
              <p>1.水象贷款海外平台搭建及开发（印度/香港/尼日利亚）。</p>
              <p>2.项目与第三方工具之间的配合及问题处理</p>
              <p>3.bug处理及线上优化。</p>
            </div>
          </div>
          <div className="project-key">
            <p>技术要点:</p>
            <div className="project-key-content">
              <p>1.使用vue + vuex + vue-router  + axios 技术栈 进行应用开发。</p>
              <p>2.一套代码针对移动端和pc端进行适配。</p>
              <p>3.使用虚拟dom替换template进行插件开发。</p>
              <p>4.通过直接引入方式来替代vue-cli进行官网开发。</p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-name">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目五:</p><p>水象IM平台搭建（H5 + pc）	</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目周期:</p><p>4个月</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目描述:</p><p> 水象IM平台的搭建及商用</p>
          </div>
          <div className="project-duty">
            <p>项目职责:</p>
            <div className="project-duty-content">
              <p>1.水象IM平台H5端开发。</p>
              <p>2.水象IM前端im-sdk开发及测试</p>
              <p>3.水象IM中台pc端开发。</p>
              <p>4.IM平台聊天，群组，个人信息的相关功能开发。</p>
            </div>
          </div>
          <div className="project-key">
            <p>技术要点:</p>
            <div className="project-key-content">
              <p>1.使用vue + vuex + vue-router + vant + axios 技术栈 进行应用开发。</p>
              <p>2.使用websocket与服务端进行通信。</p>
              <p>3.利用vuex进行页面数据缓存与不同群组之间的消息派发。</p>
              <p>4.对大批量消息接收时出现的消息丢失进行处理。</p>
              <p>5.网页端视频播放在不同环境的兼容性处理</p>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-name">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目六:</p><p>光信数科官网（pc + h5）</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目周期:</p><p>1个月</p>
          </div>
          <div className="project-time">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAIAAAB7HQGFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAa0lEQVR42pWRgQnAMAgEf5dO5yhO4iDOkVnap0Iwxdb0IBDI5aMG5x7gUlUz6z0iIgDGGI1Hg5HHzZcXkXGBwbGvvakSZtPORS8eD3KJuejFc3dUPD02kY/rdznFabz2EW2SZi5bc/7xby0Xfsm7s3Xs0QwAAAAASUVORK5CYII="
                 alt=""/>
              <p>项目描述:</p><p>光信数科官网。</p>
          </div>
          <div className="project-duty">
            <p>项目职责:</p>
            <div className="project-duty-content">
              <p>1.项目的初始化及相关配置。</p>
              <p>2.相关lib的开发与封装。</p>
              <p>3.数据的储存与交互。</p>
              <p>4.项目的测试环境和线上环境部署。</p>
            </div>
          </div>
          <div className="project-key">
            <p>技术要点:</p>
            <div className="project-key-content">
              <p>1.使用nuxt + axios技术栈进行项目开发。</p>
              <p>2.完成对移动端和pc端的区分显示与适配。</p>
              <p>3.完成服务端渲染相关流程。</p>
              <p>4.通过node + nginx完成线上环境部署与服务器的端口转发。</p>
              <p>5.通过代理完成对后台接口的跨域访问。</p>
            </div>
          </div>
        </div>
      </div>
  );
}
