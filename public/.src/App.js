import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StoreProvider } from "./redux/store";
import Loading from "./components/loading";
import Header from "./components/header";
import Steps from "./components/steps";
import ForceAlarmWizard from "./components/wizard";
import Terms from "./components/terms";
import ServicesModal from "./components/servicesModal";
import Disclaimer from "./components/disclaimer";

const GlobalStyles = styled.div`
    .btn {
        @media (max-width: 480px) {
            padding: 16px;
        }
    }
`;

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { globals } = this.props;
        return (
            <StoreProvider config={globals}>
                <GlobalStyles>
                    <Loading />
                    <Disclaimer />
                    <Terms />
                    <ServicesModal />
                    <Header />
                    <Steps />
                    <ForceAlarmWizard />
                </GlobalStyles>
            </StoreProvider>
        );
    }
}

App.propTypes = {
    config: PropTypes.object
};

export default App;