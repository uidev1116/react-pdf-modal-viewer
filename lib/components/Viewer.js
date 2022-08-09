import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { Document, Page } from 'react-pdf';
const Viewer = ({ file, options = {} }) => {
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = useCallback(
    // eslint-disable-next-line no-shadow
    ({ numPages }) => {
        setNumPages(numPages);
    }, []);
    return (_jsx("div", { children: _jsx(Document, { file: file, options: options, onLoadSuccess: onDocumentLoadSuccess, children: Array.from(new Array(numPages), (el, index) => (_jsx(Page, { pageNumber: index + 1 }, `page_${index + 1}`))) }) }));
};
export default Viewer;
