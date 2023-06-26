import React from "react";
import { useImmer } from "use-immer";
import { WrapperBlock } from "./styles";
import BlockItem from "./BlockItem";
import { initialState } from "./constant";
import { getBlockColor } from "./utils";

type TBlockItemGeneral = {};

const BlockItemGeneral: React.FC<TBlockItemGeneral> = props => {
    const [state, setState] = useImmer(initialState());

    return (
        <div className="d-flex justify-space-between my-5" style={{ gap: '2.5rem' }}>
            {Object.values(state).map(block => {
                const blockColor = getBlockColor(block.id);

                return (
                    <WrapperBlock color={blockColor}>
                        <BlockItem
                            id={block.id}
                            header={block.header}
                            body={block.body}
                        />
                    </WrapperBlock>
                )
            })}
        </div>
    )
}

export default BlockItemGeneral;