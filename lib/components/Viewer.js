import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { Document, Page } from 'react-pdf';
const Viewer = ({ file, options = {} }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);
    const onDocumentLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    ({ numPages }) => {
        setNumPages(numPages);
    }, []);
    return (_jsxs("div", { children: [_jsx(Document, { file: file, options: options, onLoadSuccess: onDocumentLoadSuccess, children: _jsx(Page, { pageNumber: pageNumber }) }), _jsxs("p", { children: ["Page ", pageNumber, " of ", numPages] })] }));
};
export default Viewer;
