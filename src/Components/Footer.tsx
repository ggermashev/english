import {Col, Image, Row} from "react-bootstrap";
import "./css/Footer.css"

export function Footer() {
    return (
        <div className="footer">
            <Row>
                <Col xs={12} sm={12}>
                    <p>@by Григорий Гермашев</p>
                </Col>
            </Row>
            <Row>
                <Col xs={6} sm={6}>vk:<Image className="footer-img" src={require("./images/vk.png")}
                                      onClick={e => {window.open('https://vk.com/ggermashev','_blank')}}/></Col>
                <Col xs={6} sm={6}>GitHub:<Image className="footer-img" src={require("./images/git.jpg")}
                                          onClick={e => {window.open('https://github.com/ggermashev?tab=repositories','_blank')}}/></Col>
            </Row>
        </div>
    )
}