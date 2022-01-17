import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Page } from 'react-pdf/dist/esm/entry.webpack';

class ThumbsRenderer extends PureComponent {
    static propTypes = {
        index: PropTypes.number.isRequired,
        style: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
    };

    render() {
        const { index, data, style } = this.props;
        const { scale, numPages, triggerResize, cachedPageDimensions, handleThumbClick, currentPage } = data;
        const thumbsScale = scale / 4;
        const thumbsHeight = cachedPageDimensions.get(index + 1)[1] / 4;

        const pageNumber = index + 1;
        
        return (
            <div {...{ style }}>
                <div
                    ref={(ref) => {
                        const { pages, pageNumbers } = this.props.data;

                        if (!pageNumbers.has(pageNumber)) {
                            const key = { pageNumber };
                            pageNumbers.set(pageNumber, key);
                        }

                        pages.set(pageNumbers.get(pageNumber), ref);
                    }}
                    onClick={() => handleThumbClick(pageNumber)}
                >
                    <Page
                        {...{ pageNumber }}
                        className={pageNumber === currentPage ? 'book-reader__current-page-thumb' : ''}                     
                        scale = { thumbsScale }
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        onLoadError={(error) => console.error(error) /* eslint-disable-line no-console */}
                    />
                    <div className="book-reader__thumbs-page-number">
                        {pageNumber}
                    </div>
                </div>
            </div>
        );
    }
}

export default ThumbsRenderer;
