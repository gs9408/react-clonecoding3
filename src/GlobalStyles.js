/**
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트.
 *               이 파일에서 정의한 class는 ReactJSX에서 className속성으로 참조해야한다.
 * @author: KGS
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";
// reset.css
import reset from 'styled-reset';

/**
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyles = createGlobalStyle`
    ${reset}

    * {}
    
    body {
        font-family: 'Lora', serif;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
