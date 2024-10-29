import { useRouter } from 'next/router';
import Image from 'next/image';

const truncateText = (text) => {
  if (text.length > 70) {
    const truncatedText = text.substring(0, 70);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    return truncatedText.substring(0, lastSpaceIndex);
  }
  return text;
};

const BlogItem = (props) => {
  const router = useRouter();

  const briefIntro = props.content.replace(/<[^<]+?>/g, '');

  const showDetailsHandler = () => {
    router.push('/knowledge-hub/' + props.id);
    console.log('we got into the showhandler function');
  };

  return (
    <li className='border h-fit rounded-xl bg-[#ffffff] shadow-xl w-fit'>
      <Image
        src={props.thumbnail}
        alt={props.title}
        priority
        width={600}
        height={600}
        className='rounded-t-xl w-full'
      />
      <div className='m-4'>
        <h3 className='font-semibold text-heading h-12'>{props.title}</h3>
        <p className='mb-4 text-paragraph text-xs'>
          {truncateText(briefIntro)} ...
        </p>
        <button
          onClick={showDetailsHandler}
          className='text-primaryColor lg:text-xs font-semibold block'>
          READ MORE
        </button>
      </div>
    </li>
  );
};

export default BlogItem;
