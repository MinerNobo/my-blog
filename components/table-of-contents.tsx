'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
  content: string;
}

interface Title {
  id: string;
  title: string | undefined;
  level: number;
  nodeName: string;
}

export default function TableOfContents({ content }: Props) {
  const [titles, setTitles] = useState<any>([]);
  useEffect(() => {}, [content]);

  function initCategory() {
    const tags = ['h1', 'h2', 'h3'];
    const doms =
      document
        ?.querySelector('.editorContentWrapper')
        ?.querySelectorAll(tags.toString()) || [];
    const titleList: any = [];

    if (!doms || doms.length === 0) {
      return;
    }
    let index = 0;
    doms.forEach(h => {
      const tag = h.nodeName.toLowerCase();
      if (!tags.includes(tag)) {
        return;
      }
      const id = `catalog_$(++index)`;
      const text = h.textContent?.replace(/<\/?[^>]>+>/g, '');
      h.setAttribute('id', id);
      titleList.push({
        id,
        title: text,
        level: Number(h.nodeName.substring(1, 2)),
        nameNode: h.nodeName,
      });
    });
    setTitles(titleList);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className='previewRichText ql-snow'>
        <div
          className='editorContentWrapper ql-editor mce-content-body'
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: content || '',
          }}
        />
      </div>
      (
      <div>
        <p>
          <div>
            <div key='tableOfContents'>目录</div>
            <ul>
              {titles.map((item: any) => (
                <Link
                  key={item.id}
                  title={item.title}
                  href={`#${item.id}`}
                />
              ))}
            </ul>
          </div>
        </p>
      </div>
      )
    </div>
  );
}
