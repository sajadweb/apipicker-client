import * as React from 'react';
import { ButtonProgressUi } from '../../components-ui';
import { Query } from 'react-apollo';
import { LOCAL_LOADING_HADER_QUERY } from '../../common';

interface IProps {
    title: string | Element | Element[];
    onClick: any;
};


class Index extends React.Component<IProps> {


    render() {
        const { title, onClick } = this.props;
        return (
            <Query query={LOCAL_LOADING_HADER_QUERY}  >
                {({ data: {isLoading} }) => {
                    debugger
                    return (
                        <ButtonProgressUi
                            loading={isLoading}
                            onClick={onClick}
                            title={title}
                        />)
                }}
            </Query>


        );
    }
}

export default Index;

