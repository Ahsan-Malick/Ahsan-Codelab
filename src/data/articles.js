import React from "react";
import "./styles.css"

function article_1() {
	return {
		date: "14 July 2024",
		title: "Deploy Your First LangChain App, Powered by FastAPI, on Render",
		description:
			"Learn How to Seamlessly Deploy Your First LangChain App, Powered by FastAPI, on Render: A Step-by-Step Guide.",
		keywords: [
			"Deplying Langchain App on Render",
			"Ahsan",
			"Ahsan J",
			"Ahsan Javed",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div >
					<h1 className="article-heading">heading</h1>
					</div>
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
		link: "https://www.linkedin.com/pulse/how-seamlessly-deploy-your-first-langchain-app-powered-ahsan-javed-23vpe/?trackingId=b%2BkzrvRxRWmOTUHoOa0s7Q%3D%3D"
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];

export default myArticles;
