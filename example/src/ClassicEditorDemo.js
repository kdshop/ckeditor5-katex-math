import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

import KatexMathPlugin from '../../src/katexmath.js';

export default class EditorDemo {
  constructor() {
    this.instance = null;
  }

  getData() {
    return this.instance.getData();
  }

  createEditor(el) {
    ClassicEditor
      .create(el, {
        plugins: [
          BoldPlugin,
          EssentialsPlugin,
          ItalicPlugin,
          KatexMathPlugin,
          ParagraphPlugin
        ],
        toolbar: [
          'bold',
          'italic',
          'insertMath',
        ],
      })
      .then(editor => {
        CKEditorInspector.attach('editor', editor);
        this.instance = editor;
      });
  }
}
