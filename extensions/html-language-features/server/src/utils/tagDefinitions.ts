/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ITagSet, HTMLTagSpecification } from 'vscode-html-languageservice';

interface Attr {
	name: string;
	description: string;
	required: boolean;
}
interface Tag {
	name: string;
	description: string;
	attributes: Attr[];
}
interface RawTagSet {
	components: Tag[];
}

export function parseTagSet(source: string): ITagSet {
	const tagSet: ITagSet = {};

	let rawTagSet: RawTagSet;
	try {
		rawTagSet = JSON.parse(source);
	} catch (err) {
		return {};
	}

	rawTagSet.components.forEach(c => {
		console.log(JSON.stringify(c.attributes));
		tagSet[c.name] = new HTMLTagSpecification(c.description, c.attributes.map(a => a.name));
	});

	debugger;
	return tagSet;
}
