import parse from 'html-react-parser';
import { formatPostsDate } from '../../utils/format';
import Share from './Share';

const BlogDetail = (props) => {
  const { title, content, dateCreated } = props;

  return (
    <div className=' mx-auto mt-32 px-6'>
      <div className='max-w-6xl text-center lg:text-left mx-auto border-2 border-primaryColor/20 md:px-12 py-6 mb-16 rounded-md'>
        <h1 className='text-4xl font-semibold text-primaryColor mt-6 mb-4'>
          {title}
        </h1>
        <p className='text-sm mb-8'>{formatPostsDate(dateCreated)}</p>
        <Share description={title} />
      </div>
      <div className='max-w-5xl mx-auto'>
        <div className='[&>h1]:text-4xl [&>h2]:text-3xl [&>h3]:text-2xl [&>h4]:text-xl [&>h5]:text-lg [&>h6]:text-base [&>p]:text-paragraph [&>p]:text-sm [&>p]:text-justify [&>ul>li]:list-disc [&>ul>li]:list-inside [&>ul>li]:text-sm [&>ol>li]:list-decimal [&>ol>li]:list-inside [&>ol>li]:text-sm [&>blockquote]:block [&>blockquote]:border [&>blockquote]:w-fit [&>blockquote]:py-2 [&>blockquote]:px-3 [&>blockquote]:m-6 [&>blockquote]:italic [&>blockquote]:text-xs [&>p>img]:w-full md:[&>p>img]:w-2/3 md:[&>p>img]:mx-auto'>
          {parse(content)}
        </div>
        <div className='w-full h-[1px] bg-black mt-20 mb-2' />
        <i className='text-xs'>
          Disclaimer: All information provided here is intended solely for study
          purposes related to trading financial markets and does not serve in
          any way as a specific investment recommendation, business
          recommendation, investment opportunity, analysis, or similar general
          recommendation regarding the trading of investment instruments. The
          content, in its entirety or parts, is the sole opinion of Deft Trader
          and is intended for educational purposes only. The historical results
          and/or track record does not imply that the same progress is
          replicable and does not guarantee profits or future profitable trading
          records or any promises whatsoever. Trading in financial markets is a
          high-risk activity and it is advised not to risk more than one can
          afford to lose.
        </i>
      </div>
    </div>
  );
};

export default BlogDetail;
