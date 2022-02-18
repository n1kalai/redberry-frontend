const CalendarIcon = () => (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="blue">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
    </svg>
)

const GearIcon = ({ size = '24px' }: { size: string }) => (
    <svg height={size} viewBox="0 0 24 24" width={size} fill="#d32f2f">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
)

const ArrowDropDownIcon = () => (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7 10l5 5 5-5H7z" />
    </svg>
)

const EditIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
    >
        <path
            d="M6.80472 0.528636C6.54437 0.268287 6.12226 0.268287 5.86191 0.528636L0.333313 6.05723V9.00004C0.333313 9.36823 0.63179 9.66671 0.99998 9.66671H3.94279L9.47138 4.13811C9.73173 3.87776 9.73173 3.45565 9.47138 3.1953L6.80472 0.528636Z"
            fill="#BFC0C4"
        />
    </svg>
)

const CloseIcon = ({ fill = '#010414' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
    >
        <path
            d="M0.399994 0.400024L11.6 11.6M0.399994 11.6L11.6 0.400024"
            stroke={fill}
        />
    </svg>
)

const SuccessIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="12"
        viewBox="0 0 14 10"
        fill="none"
    >
        <path
            d="M0.933319 4.53332L5.13332 8.73332L13.0667 0.799988"
            stroke="white"
            strokeLinecap="square"
        />
    </svg>
)

const CheckBoxIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#1013EF"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
)

const CheckBoxOutlineBlankIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
)

const PDFIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
    >
        <path
            d="M3.66665 10.6667H2.99998V9.33333H3.66665C4.03484 9.33333 4.33331 9.63181 4.33331 10C4.33331 10.3682 4.03484 10.6667 3.66665 10.6667Z"
            fill="#808189"
        />
        <path
            d="M8.33331 13.3333V9.33333H8.99998C9.36817 9.33333 9.66665 9.63181 9.66665 10V12.6667C9.66665 13.0349 9.36817 13.3333 8.99998 13.3333H8.33331Z"
            fill="#808189"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.333313 2C0.333313 0.89543 1.22874 0 2.33331 0H13.2761L17.6666 4.39052V18C17.6666 19.1046 16.7712 20 15.6666 20H2.33331C1.22874 20 0.333313 19.1046 0.333313 18V2ZM3.66665 8H1.66665V14.6667H2.99998V12H3.66665C4.77122 12 5.66665 11.1046 5.66665 10C5.66665 8.89543 4.77122 8 3.66665 8ZM8.99998 8H6.99998V14.6667H8.99998C10.1045 14.6667 11 13.7712 11 12.6667V10C11 8.89543 10.1045 8 8.99998 8ZM12.3333 14.6667V8H16.3333V9.33333H13.6666V10.6667H15V12H13.6666V14.6667H12.3333Z"
            fill="#808189"
        />
    </svg>
)

const TwoCycleArrow = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 15 15"
        fill="none"
    >
        <path
            d="M14.5 3.5L14.8536 3.85355C15.0488 3.65829 15.0488 3.34171 14.8536 3.14645L14.5 3.5ZM0.5 11.5L0.146447 11.1464C-0.0488153 11.3417 -0.0488153 11.6583 0.146447 11.8536L0.5 11.5ZM11.1464 0.853553L14.1464 3.85355L14.8536 3.14645L11.8536 0.146447L11.1464 0.853553ZM14.1464 3.14645L11.1464 6.14645L11.8536 6.85355L14.8536 3.85355L14.1464 3.14645ZM3.85355 14.1464L0.853554 11.1464L0.146447 11.8536L3.14644 14.8536L3.85355 14.1464ZM0.853554 11.8536L3.85355 8.85355L3.14645 8.14645L0.146447 11.1464L0.853554 11.8536ZM0.5 12H11.5V11H0.5V12ZM15 8.5V7H14V8.5H15ZM11.5 12C13.433 12 15 10.433 15 8.5H14C14 9.88071 12.8807 11 11.5 11V12ZM14.5 3H3.5V4H14.5V3ZM0 6.5V8H1V6.5H0ZM3.5 3C1.567 3 0 4.567 0 6.5H1C1 5.11929 2.11929 4 3.5 4V3Z"
            fill="#9492f1"
        />
    </svg>
)
export {
    CalendarIcon,
    GearIcon,
    ArrowDropDownIcon,
    EditIcon,
    CloseIcon,
    SuccessIcon,
    CheckBoxIcon,
    CheckBoxOutlineBlankIcon,
    PDFIcon,
    TwoCycleArrow
}
