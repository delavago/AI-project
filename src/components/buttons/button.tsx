import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';

interface ButtonInterface {
    value: string
    onClick?: Function;
    containerStyling?: CSSProperties
}

let Button: FC<ButtonInterface> = (props) => {
    return (
        <button
            onClick={()=>{if(props.onClick) props.onClick()}}
            style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 10,
                paddingTop: 10,
                border: 'none',
                borderRadius: 10,
                minWidth: 100,
                backgroundColor: COLORS.grey,
                color: '#fff',
                fontWeight: 'bold',
                ...props.containerStyling,
            }}
        >
            {props.value}
        </button>
    )
}

export default Button;