import Detail from './Detail';
import { FaUser, FaRegSquarePlus, FaRegFileLines } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import SidebarButton from '../SidebarButton';
export interface NoteProps {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
let noteList: NoteProps[] = [
  {
    id: 1,
    title: '제목 없음1',
    content: '내용1',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
  {
    id: 2,
    title: '제목 없음2',
    content: '내용2',
    userId: 1,
    createdAt: '2024-03-25 12:16:53',
    updatedAt: '2024-03-25 12:16:53',
  },
];
const Index = () => {
  return (
    <div className='flex flex-row h-full w-full max-w-screen-2xl mx-auto justify-center'>
      <div className=' basis-1/6 flex flex-col fixed-element w-30 bg-[#e6e6ea]'>
        <div className=' flex items-center p-4 text-xl gap-2'>
          <FaUser />
          <p className='font-semibold'>sample@exmaple.com</p>
        </div>
        <SidebarButton type='로그아웃' icon={<FiLogOut />} />
        <SidebarButton type='노트 생성' icon={<FaRegSquarePlus />} />
        <div className=' font-semibold text-gray-500'>
          <p className='pt-3 pl-3'>노트 목록</p>
          {noteList.map((item) => (
            <SidebarButton type={item.title} icon={<FaRegFileLines />} />
          ))}
        </div>
      </div>

      <div className='basis-5/6 scrollable-element overflow-y-auto'>
        <Detail />
      </div>
    </div>
  );
};

export default Index;
