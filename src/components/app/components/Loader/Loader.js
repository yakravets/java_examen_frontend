import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export default function Loader (){
    return(
        <>
            <Space size="middle">
                <Spin size="large" indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>
            </Space>
        </>
    );
}