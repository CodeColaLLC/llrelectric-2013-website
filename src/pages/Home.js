// import React from "react";
import PageScaffold from "../components/PageScaffold";
import Slider from "../components/Slider";
// import Segment from '../components/Segment';
import Footer from '../components/Footer'

import logo from '../assets/images/llrelectric-logo.png'
import aps from '../assets/images/company-logos/aps.jpg'
import ups from '../assets/images/company-logos/ups.jpg'
import copenhagen from '../assets/images/company-logos/copenhagen.jpg';
import cop from '../assets/images/company-logos/cop.jpg';
import pvgs from '../assets/images/company-logos/pvgs.jpg';
import seam from '../assets/images/company-logos/seam.jpg';
import dayzimmer from '../assets/images/company-logos/day-zimmer.jpg';

import ppe from '../assets/images/ppe-electrical-box.jpg'

import Parallax from 'react-scroll-parallax'
import PropTypes from 'prop-types'
import React, {Component, useState} from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import wbenc from "../assets/images/wbenc-logo-LG.png";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Slider/>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        textAlign='center'
                        vertical
                    >
                        <Menu

                            inverted={fixed}
                            pointing={true}
                            secondary={true}
                            size='large'
                            className="desktop-nav"
                        >
                            <Container>
                                <Menu.Item as=''>
                                    <img src={logo} style={{width: "180px"}} />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <div className='roc'>
                                        <span>480.705.8349</span><span style={{color: 'rgba(0,0,0,.87)'}}> | ROC# 162650</span>
                                        <div>
                                            <a href="mailto:support@llrelectric.com">support@llrelectric.com</a>
                                        </div>
                                    </div>
                                    {/*<Menu.Item as='a' active>*/}
                                    {/*    Home*/}
                                    {/*</Menu.Item>*/}
                                    {/*<Menu.Item as='a'>Capabilities</Menu.Item>*/}
                                    {/*<Menu.Item as='a'>Clients</Menu.Item>*/}
                                    {/*<Menu.Item as='a'>Safety</Menu.Item>*/}
                                    {/*<Menu.Item as='a'>Contact</Menu.Item>*/}
                                </Menu.Item>
                            </Container>
                        </Menu>
                    </Segment>
                    <Slider />
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>Capabilities</Menu.Item>
                    <Menu.Item as='a'>Clients</Menu.Item>
                    <Menu.Item as='a'>Safety</Menu.Item>
                    <Menu.Item as='a'>Contact</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        textAlign='center'
                        style={{ padding: '1em 0em', border: 0 }}
                        vertical
                    >
                        <Container>
                            <Menu.Item style={{float: 'left', marginTop: '30px'}}>
                                <img src={logo} style={{width: "130px"}} />
                            </Menu.Item>
                            <Menu.Item position='right'>
                            <div className='roc'>
                                <span>480.705.8349</span><span style={{color: 'rgba(0,0,0,.87)'}}> | ROC# 162650</span>
                                <div>
                                    <a href="mailto:support@llrelectric.com">support@llrelectric.com</a>
                                </div>
                            </div>
                            </Menu.Item>
                            {/*<Menu pointing secondary size='large'>*/}
                            {/*    <Menu.Item onClick={this.handleToggle}>*/}
                            {/*        <Icon name='sidebar' />*/}
                            {/*    </Menu.Item>*/}
                            {/*</Menu>*/}
                        </Container>
                        <Slider />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => {
    const [page, setPage] = useState();
    return <div>
        <DesktopContainer page={page} setPage={setPage}>{children}</DesktopContainer>
        <MobileContainer page={page}>{children}</MobileContainer>
    </div>
}

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomePage = () => (
    <>
        <Segment  vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Divider
                            as='h2'
                            className='header'
                            horizontal
                            style={{ textTransform: 'uppercase', color: '#4183c4' }}
                        >
                            Some of our trusted customers
                        </Divider>
                        <div text className='client-logos'>
                            <img src={aps} style={{height: 150}}/>
                            <img src={copenhagen} style={{height: 60, paddingRight: 10}} />
                            <img src={ups} />
                            <img src={cop} style={{height: 60}} />
                            <img src={seam} style={{height: 60}} />
                            <img src={dayzimmer} />
                            <img src={pvgs} style={{height: 60}} />

                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment inverted style={{ padding: '4em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <Header inverted as='h1' style={{  }}>
                            Over 30 Years of Excellence
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Established in 1989, we are a family-owned and operated, certified woman-owned business whose mission is to provide safe and efficient electrical installations and services with the highest degree of quality and customer service.
                        </p>
                        <Header inverted as='h3' style={{ fontSize: '2em' }}>
                            Long-term Commitment to our Employees, Customers and Suppliers
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            With a staff of over 50 <strong>employees</strong> averaging over 5 years with us, we have assembled a Management Team as well as a Field Leadership Team that average more than 10 years here at LLR Electric. Our teams are dedicated to providing consistent and continued quality service for our customers.
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            This commitment is evidenced by our long-term relationships with our <strong>customers</strong>. We are proud to have several clients that we have provided electrical services to for up to 20 to 30 years.
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            Our relationships with our valued <strong>suppliers</strong> have been instrumental in the success of our projects and our customers' satisfaction.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        {/*<Image bordered size='medium' src={ppe} />*/}
                        <a href="https://www.wbenc.org/" target="_blank"><img style={{width: "350px"}} src={wbenc}/></a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {/*<Grid.Column textAlign='center'>*/}
                    {/*        <Button size='huge' attached='left'>Clients</Button>*/}
                    {/*        <Button size='huge' attached='right'>Capabilities</Button>*/}
                    {/*</Grid.Column>*/}
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column floated='left' width={5}>
                        <Image bordered centered rounded size='medium' src={ppe} />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Long-term Commitment to Safety, Our Number One Priority
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Our employees are trained and qualified in a wide range of safety standards which has resulted in an impressive safety record.
                        </p>
                        {/*<Button as='a' size='large'>*/}
                        {/*    View Our Safety Track Record and Qualifications*/}
                        {/*</Button>*/}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </>
)

const Capabilities = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Capabilities
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    LLR Electric is a full service electrical contractor providing quality electrical services
                    safely and efficiently. Our team includes dedicated Project Managers and General

                    Foremen who have 5-15 years experience with LLR in the utility, industrial, and com-
                    mercial industries.
                </p>


                <Divider
                    as='h3'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Core Competencies</a>
                </Divider>
                <ul>
                    <li>Electrical safe work practices, and particularly at Palo Verde Nuclear Generating Station.</li>
                    <li>Ground-up electrical construction in accordance with procedures specified by PVNGS and current National Electrical Code.</li>
                    <li>Installation of duct bank, cable, and electrical equipment with medium/low volt- age levels.</li>
                    <li>Termination and testing of cables.</li>
                    <li>Electrical Installations inside the PVNGS 4160 Switchgear Room, and on Class 1E equipment.</li>
                    <li>Motor Control design/installation.</li>
                    <li>PLC Frequency Drive Programming and Installation.</li>
                </ul>
            </Container>
        </Segment>
        <Segment inverted style={{ padding: '4em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header inverted as='h3' style={{ fontSize: '2em' }}>
                            Background
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            LLR Electric, Inc. was founded in 1989 and was incorporated in the state of Arizona in 1999. LLR Electric, Inc. is a WBENC certified woman owned business.
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            LLR has been extremely successful in providing electrical contracting services to APS – PVNGS since 1999. Our resources provide a safety-oriented, professional, qualified, and nuclear power plant-experienced staff.
                        </p>

                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        {/*<Image bordered size='medium' src={ppe} />*/}
                        <a href="https://www.wbenc.org/" target="_blank"><img style={{width: "400px"}} src={wbenc}/></a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Partners in Safety and Success
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Arizona Public Service—Palo Verde Nuclear Generating Station; safely and efficiently provide electrical services since 1999.
                </p>


                    <p style={{ fontSize: '1.33em' }}>
                        Arizona Public Service—Palo Verde Nuclear Generating Station; safely and efficiently provide electrical services since 1999.
                    </p>


            </Container>
        </Segment>
    </Segment>
);

const HomepageLayout = () => (
    <ResponsiveContainer>



        {/* START HOME PAGE*/}
        <HomePage />
        {/* END HOME PAGE*/}

        {/*<Capabilities />*/}

        <Footer />
    </ResponsiveContainer>
)

export default HomepageLayout
