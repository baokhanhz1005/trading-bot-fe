import { Icon, Text } from "app/components/Atoms";
import React from "react";

type TBlockItem = {
    id: string,
    header: string,
    body: any,
};

const BlockItem: React.FC<TBlockItem> = props => {
    const { id, header, body } = props;

    return (
        <div id={id} className="contain-block">
            <Text color="#fff" size="16px">
                {header}
            </Text>
            <div className="my-5">
                <Text size="26px" fontWeight='bold' color="#fff" margin="10px 0">
                    {body.info.data}
                    <Text type="inline-block" size="12px" margin="0 5px">{`${body.info.suffix || ''}`}</Text>
                </Text>
                {body.moreInfo && (
                    <Text type="block" size="18px" fontWeight='bold' color='#48ff35'>
                        {body.moreInfo.data}
                        {body.moreInfo.isShowIcon && <Icon type="icon-arrow-up" size="12px" style={{ margin: '0 10px' }} />}
                    </Text>
                )}
            </div>
        </div>
    )
};

export default BlockItem;
