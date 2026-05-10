/**
 * Types describing the shape of brand-spec's `brand.yaml`.
 *
 * These are intentionally permissive — `brand.yaml` is hand-authored and
 * may contain notes/illustrative fields. We model only what the validator
 * uses to make rule decisions.
 */
import { z } from 'zod';
declare const FrontmatterFieldSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    format: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    notes: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    required_when: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    format: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    notes: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    required_when: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    format: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    notes: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    required_when: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type FrontmatterField = z.infer<typeof FrontmatterFieldSchema>;
declare const FrontmatterMapSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    format: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    notes: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    required_when: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    format: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    notes: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    required_when: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
    format: z.ZodOptional<z.ZodString>;
    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    notes: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    required_when: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>>;
export type FrontmatterMap = z.infer<typeof FrontmatterMapSchema>;
declare const FileEntrySchema: z.ZodObject<{
    path: z.ZodOptional<z.ZodString>;
    pattern: z.ZodOptional<z.ZodString>;
    glob: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    min_files: z.ZodOptional<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
    frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
    body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    file_header_convention: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    path: z.ZodOptional<z.ZodString>;
    pattern: z.ZodOptional<z.ZodString>;
    glob: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    min_files: z.ZodOptional<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
    frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
    body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    file_header_convention: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    path: z.ZodOptional<z.ZodString>;
    pattern: z.ZodOptional<z.ZodString>;
    glob: z.ZodOptional<z.ZodString>;
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    min_files: z.ZodOptional<z.ZodNumber>;
    notes: z.ZodOptional<z.ZodString>;
    frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
        const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
        format: z.ZodOptional<z.ZodString>;
        items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        notes: z.ZodOptional<z.ZodString>;
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        required_when: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>>;
    body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    file_header_convention: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export type FileEntry = z.infer<typeof FileEntrySchema>;
declare const DirectoryEntrySchema: z.ZodObject<{
    path: z.ZodString;
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodString>;
    contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    path: z.ZodString;
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodString>;
    contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    path: z.ZodString;
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodString>;
    contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export type DirectoryEntry = z.infer<typeof DirectoryEntrySchema>;
declare const LayerSchema: z.ZodObject<{
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    required: z.ZodOptional<z.ZodBoolean>;
    recommended: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodString>;
    files: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodOptional<z.ZodString>;
        pattern: z.ZodOptional<z.ZodString>;
        glob: z.ZodOptional<z.ZodString>;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        min_files: z.ZodOptional<z.ZodNumber>;
        notes: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
            const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
            format: z.ZodOptional<z.ZodString>;
            items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            notes: z.ZodOptional<z.ZodString>;
            properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            required_when: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>>;
        body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        file_header_convention: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        path: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        notes: z.ZodOptional<z.ZodString>;
        contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export type Layer = z.infer<typeof LayerSchema>;
declare const ValidationRuleSchema: z.ZodObject<{
    id: z.ZodString;
    rule: z.ZodString;
    severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    id: z.ZodString;
    rule: z.ZodString;
    severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    id: z.ZodString;
    rule: z.ZodString;
    severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
}, z.ZodTypeAny, "passthrough">>;
export type ValidationRule = z.infer<typeof ValidationRuleSchema>;
export declare const BrandSpecSchema: z.ZodObject<{
    schema_version: z.ZodNumber;
    contract_name: z.ZodString;
    contract_version: z.ZodString;
    conventions: z.ZodOptional<z.ZodObject<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">>>;
    layers: z.ZodRecord<z.ZodString, z.ZodObject<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    validation: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    schema_version: z.ZodNumber;
    contract_name: z.ZodString;
    contract_version: z.ZodString;
    conventions: z.ZodOptional<z.ZodObject<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">>>;
    layers: z.ZodRecord<z.ZodString, z.ZodObject<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    validation: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    schema_version: z.ZodNumber;
    contract_name: z.ZodString;
    contract_version: z.ZodString;
    conventions: z.ZodOptional<z.ZodObject<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        file_format: z.ZodOptional<z.ZodString>;
        data_format: z.ZodOptional<z.ZodString>;
        frontmatter: z.ZodOptional<z.ZodObject<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            syntax: z.ZodOptional<z.ZodString>;
            presence: z.ZodOptional<z.ZodString>;
            common_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
        }, z.ZodTypeAny, "passthrough">>>;
        file_naming: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        reserved_prefixes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, z.ZodTypeAny, "passthrough">>>;
    layers: z.ZodRecord<z.ZodString, z.ZodObject<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodOptional<z.ZodBoolean>;
        recommended: z.ZodOptional<z.ZodBoolean>;
        description: z.ZodOptional<z.ZodString>;
        files: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodOptional<z.ZodString>;
            pattern: z.ZodOptional<z.ZodString>;
            glob: z.ZodOptional<z.ZodString>;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            min_files: z.ZodOptional<z.ZodNumber>;
            notes: z.ZodOptional<z.ZodString>;
            frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                type: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                format: z.ZodOptional<z.ZodString>;
                items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                notes: z.ZodOptional<z.ZodString>;
                properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                required_when: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>>;
            body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            file_header_convention: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        directories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            path: z.ZodString;
            required: z.ZodOptional<z.ZodBoolean>;
            recommended: z.ZodOptional<z.ZodBoolean>;
            notes: z.ZodOptional<z.ZodString>;
            contents: z.ZodOptional<z.ZodArray<z.ZodObject<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                path: z.ZodOptional<z.ZodString>;
                pattern: z.ZodOptional<z.ZodString>;
                glob: z.ZodOptional<z.ZodString>;
                required: z.ZodOptional<z.ZodBoolean>;
                recommended: z.ZodOptional<z.ZodBoolean>;
                min_files: z.ZodOptional<z.ZodNumber>;
                notes: z.ZodOptional<z.ZodString>;
                frontmatter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                    type: z.ZodOptional<z.ZodString>;
                    required: z.ZodOptional<z.ZodBoolean>;
                    enum: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>, "many">>;
                    const: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>>;
                    format: z.ZodOptional<z.ZodString>;
                    items: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    notes: z.ZodOptional<z.ZodString>;
                    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                    required_when: z.ZodOptional<z.ZodString>;
                }, z.ZodTypeAny, "passthrough">>>>;
                body_sections_recommended: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                file_header_convention: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    validation: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        rule: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["error", "warn"]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
}, z.ZodTypeAny, "passthrough">>;
export type BrandSpec = z.infer<typeof BrandSpecSchema>;
export {};
//# sourceMappingURL=types.d.ts.map