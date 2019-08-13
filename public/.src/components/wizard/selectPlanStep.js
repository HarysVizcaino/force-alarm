import React from "react";
import styled from "styled-components";
import plan_image from "../../static/force-alarm-plans.png";

import {
    Container,
    Jumbotron,
    Row, Col,
    Button
} from "reactstrap";

const PlanName = styled.div`
    color: #c32c1e;
    font-size: 22px;
`;

class SelectPlan extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            plans: []
        }
    }
    handleBackButton = (e) => {
        e.preventDefault();
    }
    handlePlanSelect = (e, plan) => {
        e.preventDefault();
        this.props.handleStep( plan );
    }
    getPlans = () => {
        return this.props.plans.reverse();
    }
    showServiceModal = (plan) => {
        this.props.showServiceModal(plan);

    }
    render() {
        const plans = this.getPlans();
        console.log("order? ", plans);
        const renderPlans = plans.map( (plan, indx) => {
        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency:'USD' });
        const PriceFormatted = formatter.format(plan.price);
            return (
                <Col xs="12" sm="4" key={indx} className="mt-5">
                    <div className="mb-3">
                        <center>
                            <img 
                                className="img-thumbnail p-5" 
                                src={plan_image} />
                        </center>
                    </div>
                    <PlanName>
                        <span className="text-uppercase font-weight-bold text-center">{plan.post_title}</span>
                    </PlanName>
                    <div>
                        <p className="my-3 h3 text-center">
                            {PriceFormatted} <span className="text-black-50 h6">/mes</span>
                        </p>
                    </div>
                    <Button color="danger" onClick={e=>this.handlePlanSelect(e, plan)}>Seleccionar</Button>
                    <div>
                        <a href="" 
                            className="mt-3"
                            onClick={e=> {
                                e.preventDefault();
                                this.showServiceModal(plan);
                            }} title={plan.title} price={plan.price}>ver más</a>
                    </div>
                </Col>
            );
        });
        return (
            <React.Fragment>
                <Jumbotron tag="section" className="text-center" style={{backgroundColor:"white", borderRadius:"none"}}>
                    <Container>
                        <h2 className="text-center jumbotron-heading display-5 mb-4">¿Con cuál plan desea proteger su hogar?</h2>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col xs="12" md={{ size: 8, offset: 2 }}>
                                <Row>
                                    {renderPlans}
                                </Row>
                            </Col>
                        </Row>
                    </Container>    
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default SelectPlan;