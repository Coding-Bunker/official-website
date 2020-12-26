import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import blog from './Blog.module.scss'
import PostCard from '../PostCard/PostCard.js'

interface Props {
	topics: Array<string>
	title: string
	description: string
}

const Argomento: React.FC = ({ children }) => <div className={blog.args}>{children}</div>

const Blog: React.FC<Props> = ({ topics, title, description }) => (
	<div className={blog.section}>
		<Container fluid className={blog.container}>
			<Row>
				<Col>
					<div className={blog.title}>{title}</div>
					<div className={blog.description}>{description}</div>
					<div className={blog.themes}>Trattiamo questi temi:</div>
					<div className={blog.argsContainer}>
						{Array.from({ length: topics.length / 3 })
							.map((_, i) => topics.slice(i, i + 3))
							.map((topicGroup, groupIndex) => (
								<Row key={groupIndex}>
									{topicGroup.map((topic, topicIndex) => (
										<Argomento key={topicIndex}>{topic}</Argomento>
									))}
								</Row>
							))}
					</div>
				</Col>
				<Col>
					<PostCard className={blog.card} />
					<div className={blog.button}>Vai al Blog</div>
				</Col>
			</Row>
		</Container>
	</div>
)

export default Blog
