import { Col, Container, Row } from "react-bootstrap"
import '../styles/Articles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import { Button } from "react-bootstrap";

const ArticleList = ({articles}) => {
    return ( 
        <div>
            <Container>
                <Row>
                    
   
            {articles.map((article) => (
                <Col md="auto" className="col-md-4">
                         <Card border="secondary" className="mt-3 mb-2 " style={{ width: '21rem', height: '39rem' }}>
                         <Card.Img src="https://via.placeholder.com/600/56a8c2"></Card.Img> 
                         <Card.Body>
                           <Card.Title>{article.title}</Card.Title>
                           <Card.Text>
                             {article.body}
                           </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                             <Button>Read more</Button>
                         </Card.Footer>
                       </Card>
                       </Col>)
        )}
        
        </Row>
        </Container>
        </div>
     );
}
 
export default ArticleList;