import React from 'react';
import { PageHeader } from 'antd';
import { FcSettings } from "react-icons/fc";

export default class UserSettigs extends React.Component {

    constructor(props){
        super(props);
        this.state = {name: this.props.name}
    }

    componentDidMount(){
        
    }
    render(){        
        return (
            <>
                <PageHeader
                    className="site-page-header"
                    avatar={{ src: <FcSettings /> }}
                    title="My settings:"
                    subTitle={this.state.name}
                />
            </>
        );
    }
}